import * as React from 'react';

import Alert from '../Alert';
import { AllStates } from '../AllLists/data';
import Modal from '../Modal';
import ShareButton from '../ShareButton';

interface ScoreModalProps {
  alertText: string;
  close: () => void;
  count: number;
  selected: string[];
  setAlertText: (newAlertText: string) => void;
  show: boolean;
}

const ScoreModal = ({ alertText, close, count, selected, setAlertText, show }: ScoreModalProps) => {
  const usStatesCount = selected.filter(select => select.includes('US-')).length;
  const usTerritoriesCount = selected.filter(select => select.includes('UST-')).length;
  const nativeAmericanNationsCount = selected.filter(select => select.includes('NA-')).length;
  const canadaianProvinceCount = selected.filter(select => select.includes('CA-')).length;
  const mexicanStateCount = selected.filter(select => select.includes('MX-')).length;

  let shareText = 'My latest license plate game scores:\n';
  shareText += `Total score: ${count}\n\n`;
  shareText += `US States: ${usStatesCount}\n`;
  shareText += `US Territories: ${usTerritoriesCount}\n`;
  shareText += `Native American Nations: ${nativeAmericanNationsCount}\n`;
  shareText += `Canadian Provinces: ${canadaianProvinceCount}\n`;
  shareText += `Mexican States: ${mexicanStateCount}\n\n`;
  shareText += `You can play too at:\n`;
  shareText += `https://plates.slushman.com`;

  return (
    <Modal onClose={close} show={show} title="Your Score">
      <div className="flex flex-col items-center">
        <Alert message={alertText} setAlertText={setAlertText} />
        <section>
          <div className="pb-8">
            <h2>Total Score: {count}</h2>
          </div>
          <div>
            <h2>Breakdown by groups:</h2>
            <ul>
              <li>- US States: {usStatesCount}</li>
              <li>- US Territories: {usTerritoriesCount}</li>
              <li>- Native American Nations: {nativeAmericanNationsCount}</li>
              <li>- Canadian Provinces: {canadaianProvinceCount}</li>
              <li>- Mexican States: {mexicanStateCount}</li>
            </ul>
          </div>
          <div>
            <h2>Plates seen so far:</h2>
            <ul>
              {selected.map((select) => {
                const stateObject = AllStates.find(state => state.value === select);
                return (
                  <li>- {stateObject?.label}</li>
                );
              })}
            </ul>
          </div>
        </section>
        <ShareButton setAlertText={setAlertText} shareText={shareText} />
      </div>
    </Modal>
  );
}

export default React.memo(ScoreModal);
