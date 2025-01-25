const About = () => {
    const experiences = [
      {
        title: "Front-End Developer",
        company: "Xenova Soft",
        location: "Rawalpindi, Pakistan",
        type: "Full-Time",
        typeColor: "bg-green-100 text-green-700",
        date: "Oct 2024 - Present",
      },
     
    ];
  
    return (
      <div id="about" className="container mx-auto px-4 py-16">
        {/* About Me Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">
            About Me
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400">
            I am a Front-End developer with experience in HTML, CSS, JavaScript,
            React Js, Next Js, Tailwind, Git, GitHub, and Bootstrap. I am passionate about
            creating responsive and user-friendly websites. I am always eager to
            learn new technologies and improve my skills. I am a team player and I
            enjoy working with others to achieve a common goal. I am looking for
            new opportunities to grow and expand my knowledge in the field of web
            development.
          </p>
        </div>
  
        {/* Work Experience Section */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">
            Work Experience
          </h1>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="mr-1">📍</span> {exp.location}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${exp.typeColor}`}
                  >
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  <span className="mr-1">📅</span> {exp.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">
            Education
          </h1>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bachelor&apos;s Degree in Computer Science
                  </h3>
                  <p className="text-sm text-gray-500">Federal Urdr University of Arts Science and Technoloy</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="mr-1">📍</span> Islamabad, Pakistan
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium bg-blue-100 text-blue-700`}
                >
                  Full-Time
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 flex items-center">
                <span className="mr-1">📅</span> Sep 2020 - June 2024
              </p>

              
            </div>
          </div>
      </div>
    </div>
    );
  };
  
  export default About;
  