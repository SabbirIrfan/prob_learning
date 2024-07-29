import "./styles.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
     {/* how does this invoked ? 
        the naming convention of @modal is the parallel routing.
         so when the layout is intiated, they will expect props of all parralel routs
     */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      {props.modal} 
     
      {props.children}
    </>
  );
}