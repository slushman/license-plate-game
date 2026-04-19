import * as React from "react";

import { Action } from "../types";
import Alert, { AlertType } from "../Alert";
import BackToTop from "../BackToTop";
import FilterSearch from "../FilterSearch";
import { getSelectedScore } from "../../utils";
import Header from "../Header";
import List from "../List";
import { ListItemType } from "../types";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { USStates } from "../../data/us";
import { USTerritories } from "../../data/us-territories";
import { CanadianProvinces } from "../../data/canada";
import { MexicanStates } from "../../data/mexico";

const NativeAmericansList = React.lazy(() => import("../NativeAmericansList"));
const ScoreModal = React.lazy(() => import("../ScoreModal"));

const AllLists = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalMounted, setModalMounted] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [alertText, setAlertText] = React.useState("");
  const [score, setScore] = React.useState(0);

  // Defer mounting the modal until after first paint so its DOM cost
  // stays off the critical path, but it's in place (opacity-0) before
  // the user can click Score — preserves the fade-in/out transition.
  React.useEffect(() => {
    setModalMounted(true);
  }, []);

  // change 'plates-selected' to 'plates-{uuid}' to have different saved games
  const [selected, setSelected] = useLocalStorage("plates-selected", []);

  const handleChangeSelected = React.useCallback(
    (value: string, action: Action) => {
      const selectedScore = getSelectedScore(value);

      if (action === Action.Add) {
        setSelected((prevState: string[]) => [...prevState, value]);
        setScore((prevState: number) => prevState + selectedScore);
      } else {
        const newSelected = selected.filter((item: string) => item !== value);
        setSelected(newSelected);
        setScore((prevState: number) => prevState - selectedScore);
      }
    },
    [selected, setSelected]
  );

  const handleCloseModal = React.useCallback(() => setShowModal(false), []);

  const handleOpenModal = React.useCallback(() => setShowModal(true), []);

  const handleResetGame = React.useCallback(() => {
    setSelected([]);
    setScore(0);
  }, [setSelected]);

  const filtered = (items: ListItemType[]) =>
    items.filter((item: ListItemType) =>
      item.label.toLowerCase().includes(searchText)
    );

  return (
    <div className="p-4" id="top" tabIndex={-1}>
      <Header
        onClickScore={handleOpenModal}
        onReset={handleResetGame}
        score={score}
      />
      <main className="flex flex-col items-center">
        <Alert
          message={alertText}
          setAlertText={setAlertText}
          type={AlertType.Default}
        />
        <FilterSearch searchText={searchText} setSearchText={setSearchText} />
        <List
          items={filtered(USStates)}
          onChange={handleChangeSelected}
          selected={selected}
          title="US States"
        />
        <List
          items={filtered(USTerritories)}
          onChange={handleChangeSelected}
          selected={selected}
          title="US Territories"
        />
        <React.Suspense fallback={null}>
          <NativeAmericansList
            onChange={handleChangeSelected}
            searchText={searchText}
            selected={selected}
          />
        </React.Suspense>
        <List
          items={filtered(CanadianProvinces)}
          onChange={handleChangeSelected}
          selected={selected}
          title="Canadian Provinces"
        />
        <List
          items={filtered(MexicanStates)}
          onChange={handleChangeSelected}
          selected={selected}
          title="Mexican States"
        />
        <BackToTop />
        {modalMounted && (
          <React.Suspense fallback={null}>
            <ScoreModal
              alertText={alertText}
              close={handleCloseModal}
              score={score}
              selected={selected}
              setAlertText={setAlertText}
              show={showModal}
            />
          </React.Suspense>
        )}
      </main>
    </div>
  );
};

export default AllLists;
