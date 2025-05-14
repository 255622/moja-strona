function RegistrationForm() {
    return (
        <div className="form">
            <h2>Zapisz drużynę</h2>
            <input type="text" placeholder="Nazwa drużyny" />
            <input type="text" placeholder="Kapitan drużyny" />
            <input type="text" placeholder="Zawodnicy (oddzieleni przecinkami)" />
            <input type="text" placeholder="Kontakt (telefon/email)" />
            <input type="file" />
        </div>
    );
}

export default RegistrationForm;
