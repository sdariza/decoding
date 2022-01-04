import ReactLoading from "react-loading"
const Loading = () => {
    return(
        <div className="loading-container">
            <div className="loading-content">
                <ReactLoading type={"spin"} color="#000" />
                <p>Cargando trama...</p>
            </div>
        </div>
    );
};
  
  export default Loading;
  