export default function ResultsCardLoad() {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-bg-secondary mb-3" aria-hidden="true">
                <div className="card-header">
                    <h2 className="card-text placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h2>
                </div>
                <div className="card-body bg-white rounded-bottom">
                    <h3 className="card-text placeholder-glow">
                        <img src="https://i.imgur.com/cVjFPOy.png" alt="Gray Loading Square" />
                        <span className="placeholder col-1"></span>
                        <span className="placeholder col-7 bg-dark"></span>
                    </h3>
                    <h3 className="card-text placeholder-glow">
                        <img src="https://i.imgur.com/cVjFPOy.png" alt="Gray Loading Square" />
                        <span className="placeholder col-1"></span>
                        <span className="placeholder col-5 bg-dark"></span>
                    </h3>
                    <h3 className="card-text placeholder-glow">
                        <img src="https://i.imgur.com/cVjFPOy.png" alt="Gray Loading Square" />
                        <span className="placeholder col-1"></span>
                        <span className="placeholder col-8 bg-dark"></span>
                    </h3>
                </div>
            </div>
        </div>
    )
}