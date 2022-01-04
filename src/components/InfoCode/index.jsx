import { Toast } from "react-bootstrap";
const InfoCode = ({ title, info }) => {
    return (
        <>
            <Toast className="lg-mt-4">
                <Toast.Header closeButton={false}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{`${title}`}</strong>

                </Toast.Header>
                <Toast.Body>
                    {info?.length > 1 ? info.map((value) => "| " + value + " ") : <p>{`${info}`}</p>}
                </Toast.Body>
            </Toast>
        </>
    )
}

export default InfoCode;