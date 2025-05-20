import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import TeamCounter from './components/TeamCounter.jsx';
import Modal from './components/Modal.jsx';
import './App.css';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);
    const handleCheckboxChange = () => setChecked(!isChecked);

    return (
        <div>
            <Navbar />

            <main className="main">
                <h1 className="title">POWIATOWY TURNIEJ PIŁKI NOŻNEJ</h1>

                <section className="description">
                    <p>Organizacja powiatowego turnieju piłkarskiego dla uczniów szkół powiatu Łódzkiego – chcących sprawdzić się w sportowej rywalizacji.</p>
                    <ul>
                        <li>✅ Promowanie aktywności fizycznej i zdrowego stylu życia</li>
                        <li>✅ Integracja społeczności szkolnej poprzez sport</li>
                        <li>✅ Wyłonienie najlepszej drużyny w powiecie</li>
                    </ul>
                </section>

                <button onClick={toggleModal}>Regulamin Turnieju</button>

                {isModalOpen && <Modal onClose={toggleModal} />}

                <RegistrationForm />

                <form className="form">
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Akceptuję regulamin turnieju
                    </label>
                    <br />
                    <button type="submit" disabled={!isChecked}>Zapisz drużynę</button>
                </form>

                <TeamCounter />
            </main>

            <footer className="footer">
                <h3>FAQ</h3>
                <ul>
                    <li><strong>Jakie są wymagania dla drużyn?</strong> Każda drużyna musi składać się z 7 zawodników.</li>
                    <li><strong>Gdzie odbędą się mecze?</strong> Mecze będą rozgrywane na boiskach w powiecie Łódzkim.</li>
                    <li><strong>Co zrobić w przypadku kontuzji?</strong> W przypadku kontuzji należy zgłosić się do organizatorów.</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
