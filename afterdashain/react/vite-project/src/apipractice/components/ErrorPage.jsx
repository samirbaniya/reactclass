function ErrorPage() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        zIndex: "1000",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="error-message"></div>
    </div>
  );
}

export default ErrorPage;
