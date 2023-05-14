export default function ResultsCardShow({ result }) {

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <div className="card h-100">
                <img src={result.images[1].url} alt={result.name} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-start">
                    <h5 className="card-title overflow-auto text-center" style={{ height: "75px" }}>
                        {result.name}
                    </h5>
                    <p className="card-text overflow-auto border rounded" style={{ height: "100px" }}>{result.description}</p>
                    <div className="d-flex justify-content-center">
                        <a href={result.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="btn btn-success">Listen on Spotify</a>
                    </div>
                </div>
                <div className="card-footer">
                    Release Date: {result.release_date}
                </div>
            </div>
        </div>
    )
}