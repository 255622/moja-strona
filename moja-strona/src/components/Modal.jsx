function Modal({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Regulamin Turnieju</h2>
                <ul>
                    <li>Każda drużyna składa się z 7 zawodników.</li>
                    <li>Zawody rozgrywane są na boiskach o wymiarach 50x30 metrów.</li>
                    <li>Każdy mecz trwa 2 x 15 minut z 5 minutową przerwą.</li>
                    <li>Każdy zawodnik musi być uczniem szkoły z powiatu Łódzkiego.</li>
                    <li>Wszyscy uczestnicy muszą posiadać odpowiedni strój sportowy.</li>
                </ul>
                <button onClick={onClose}>Zamknij</button>
            </div>
        </div>
    );
}

export default Modal;
