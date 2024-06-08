  import React from 'react';

  const EducationSection = () => {
    const educationEntries = [
      {
        year: '2022-2024',
        institution: 'California State University, Long Beach',
        degree: 'Masters in Computer Science',
        // courses: 'Courses: Business Analytics, Artificial Intelligence, Deep Learning for Business, Cybersecurity Analytics, technology-based startups focusing on AI and blockchain applications, Information Systems Security.',
        side: 'left',
        image: 'data:image/png;base64,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', // Add the image URL here
      },
      {
        year: '2020-2021',
        institution: 'Fidelity National Information Services, Inc.',
        degree: 'DevOps Engineer',
        major: 'Computer Science',
        // courses: 'Courses: Data Structures, Algorithms, Networking Systems, Database Management, Software Engineering, Advanced Programming, Cybersecurity, Artificial Intelligence, Machine Learning, Web Development and Mobile Application Development.',
        side: 'right',
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_m-dmhaXsmxBqi4nOVPXVX8ydLn1f781GsWvJ2oKG73TcA=s900-c-k-c0x00ffffff-no-rj', // Add the image URL here
      },
      {
        year: '2016-2020',
        institution: 'PBR VITS',
        degree: 'Bachelors of Technology in Computer Science',
        major: 'Computer Science',
        // courses: 'Courses: Data Structures, Algorithms, Networking Systems, Database Management, Software Engineering, Advanced Programming, Cybersecurity, Artificial Intelligence, Machine Learning, Web Development and Mobile Application Development.',
        side: 'left',
        image: 'https://images.collegedunia.com/public/college_data/images/campusimage/14156904832.JPG', // Add the image URL here
      },
      // ... Add more entries as needed
    ];

    const timelineStyle = {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      marginTop: '20px',
      width: '100%',
    };

    const lineStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '4px',
      backgroundColor: '#04293a',
    };

    

    const entryStyle = (side) => ({
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      marginBottom: '40px',
      marginLeft: side === 'left' ? '0px' : '0', 
      marginRight: '0px',
    });

    const entryContentStyle = {
      backgroundColor: 'transparent',
      color: 'blue',
      padding: '10px 20px',
      borderRadius: '5px',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      width: 'auto',
      // maxWidth: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const yearStyle = {
      display: 'block',
      color: 'white',
      // fontWeight: 'bold',
      marginBottom: '5px',
      background: 'transparent'
    };

    const entryMarkerStyle = {
      width: '24px',
      height: '24px',
      backgroundColor: '',
      border: '4px solid #074368',
      borderRadius: '50%',
      position: 'absolute',
      left: '50.18%',
      transform: 'translate(-50%, -50%)',
      background: 'black'
    };

    const imageStyle = {
      width: '500px',
      height: '350px',
      borderRadius: '10%',
      marginBottom: '10px',
    };

    const textContainerStyle = {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      marginTop: '10px',
      textAlign: 'center',
      background: 'transparent'
    };

    const institutionStyle = {
      color: '#074368',
      fontWeight: 'bold',
      fontSize: '1em',
      marginBottom: '3px',
      background: ''
    };

    const degreeStyle = {
      color: 'white',
      fontSize: '0.9em',
      marginBottom: '2px',
      background: 'transparent'
    };

    const coursesStyle = {
      color: 'white',
      fontSize: '0.8em',
      marginBottom: '2px',
      background: 'transparent'
    };

    return (
      <section id="education">
        <div style={{ position: 'relative', width: '100%' }}>
          <h3 style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '27px', fontWeight: 'bold' }}>EDUCATION & WORK EXPERIENCE</h3>
          <div style={timelineStyle}>
            <div style={lineStyle}></div>
            {educationEntries.map((entry) => (
              <div key={entry.year} style={entryStyle(entry.side)}>
                <div style={entryContentStyle}>
                  <img src={entry.image} alt={entry.institution} style={imageStyle} />
                  <div style={textContainerStyle}>
                  <div style={institutionStyle}>{entry.institution}</div>
                    
                    <div style={degreeStyle}>{entry.degree}</div>
                    <span style={yearStyle}>{entry.year}</span>
                    <div style={coursesStyle}>{entry.courses}</div>
                  </div>
                </div>
                <div style={entryMarkerStyle}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default EducationSection;