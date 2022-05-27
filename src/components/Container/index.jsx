import Editor from "./QueryEditor";
import TabPane from "./TabPane";

const Container = ({openTab,setOpenTab,resetQuery}) => {
  return (
    <>
      <TabPane openTab={openTab} setOpenTab={setOpenTab} />
      <Editor openTab={openTab} setOpenTab={setOpenTab} resetQuery={resetQuery}/>
    </>
  );
};
export default Container;

