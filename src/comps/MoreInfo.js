import React from "react";
import { Modal, Card } from "react-bootstrap";

const MoreInfo = ({ details, visible, onClose }) => {
  if (!details) return null;

  const imageUrl =
    details.title.primaryImage?.url ||
    "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg";

  return (
    <Modal
      show={visible}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">
          {details.title.titleText?.text || "Unknown"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <div
          style={{
            height: "800px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imageUrl}
            alt={`Poster of ${details.title.titleText?.text}`}
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="w-100">
          {[
            { label: "Title", value: details.title.titleText?.text },
            {
              label: "Original Title",
              value: details.title.originalTitleText?.text,
            },
            {
              label: "Release Date",
              value: details.title.releaseDate
                ? `${details.title.releaseDate.year}-${details.title.releaseDate.month}-${details.title.releaseDate.day}`
                : "Unknown",
            },
            {
              label: "Runtime",
              value: details.title.runtime
                ? `${Math.round(details.title.runtime.seconds / 60)} minutes`
                : "Unknown",
            },
            {
              label: "Countries of Origin",
              value:
                details.title.countriesOfOrigin?.countries
                  ?.map((country) => country.text)
                  .join(", ") || "Unknown",
            },
            {
              label: "Filming Locations",
              value:
                details.title.filmingLocations?.edges?.length > 0
                  ? details.title.filmingLocations.edges
                      .map(
                        (edge) => edge.node.displayableProperty.value.plainText
                      )
                      .join(", ")
                  : "Unknown",
            },
            {
              label: "Official Site",
              value:
                details.title.officialLinks?.edges.length > 0 &&
                details.title.officialLinks.edges[0]?.node.url ? (
                  <a
                    href={details.title.officialLinks.edges[0].node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ) : (
                  "Unknown"
                ),
            },
            {
              label: "Spoken Languages",
              value:
                details.title.spokenLanguages?.spokenLanguages
                  ?.map((lang) => lang.text)
                  .join(", ") || "Unknown",
            },
            {
              label: "AKAs (Also Known As)",
              value:
                details.title.akas?.edges
                  ?.map((edge) => edge.node.displayableProperty.value.plainText)
                  .join(", ") || "Unknown",
            },
          ].map((item, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>
                <Card.Title>{item.label}</Card.Title>
                <Card.Text>{item.value}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MoreInfo;
