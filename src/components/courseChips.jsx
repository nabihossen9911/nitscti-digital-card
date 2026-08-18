import profile from "../data/profile";

function CourseChips() {
  return (
    <section className="courses">
      <h3>Popular Courses</h3>

      <div className="course-list">
        {profile.courses.map((course) => (
          <span key={course} className="course-chip">
            {course}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CourseChips;