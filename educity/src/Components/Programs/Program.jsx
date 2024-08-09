import "./Programs.css";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src="/medicine.webp" alt="medicine" width={350} height={230} />
        <div className="caption">
          <img src="" alt="" />
          <p>Medicine</p>
        </div>
      </div>
      <div className="program">
        <img src="/radiology.webp" alt="medicine" width={350} height={230} />
        <div className="caption">
          <img src="" alt="" />
          <p>Radiology</p>
        </div>
      </div>
      <div className="program">
        <img src="dna.webp" alt="medicine" width={350} height={230} />
        <div className="caption">
          <img src="" alt="" />
          <p>Gentics and Molecular Biology</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
