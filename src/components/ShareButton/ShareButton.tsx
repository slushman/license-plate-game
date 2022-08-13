import * as React from 'react';

const navigator = window.navigator as any;

interface ShareButtonProps {
  setAlertText: (newAlertText: string) => void;
  shareText: string;
}

const ShareButton = ({ setAlertText, shareText }: ShareButtonProps) => {
  const handleShare = React.useCallback(() => {
    if ('canShare' in navigator) {
      navigator.share({
        title: 'Phonics results',
        text: shareText,
      })
      .catch(console.error);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);

      console.log('Copied to clipboard!');

      setAlertText('Copied to clipboard!');
    } else {
      alert('Your browser does not support sharing. Please copy the text and share it yourself.');
    }
  }, [setAlertText, shareText]);

  return (
    <button
      className="border-2 rounded border-solid px-4 py-1 bg-darkblue"
      onClick={handleShare}
    >
      <i className="icono-share scale-75" />
      Share
    </button>
  );
};

export default React.memo(ShareButton);
