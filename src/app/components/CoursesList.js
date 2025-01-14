import Image from 'next/image';

export default function CoursesList({ courses, dir = "ltr", titleSection }) {
  return (
    <section className="py-16 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4"> 
        <h2 className="text-3xl font-bold mb-12 text-center">{titleSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div
                className={`h-48 bg-blue-600 flex items-center justify-center`}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={195}
                  height={195}
                  style={{ width: "100%", height: "100%" , objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-1">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <a
                    href={course.link}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    {course.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
