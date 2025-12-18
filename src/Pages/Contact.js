import "../Styles/Contact.css";

export const Contact = () => {
  return (
    <>
      <div className="Contactpage">
        <h1>Contact Me</h1>
        <section>
          <label>Name : </label>
          <p>Manickavasagan</p>
          <label>Phone Number : </label>
          <p>+91 1234567890</p>
          <label>Email : </label>
          <p>manickavasagan@gmail.com</p>
        </section>
      </div>
      <div className="AboutPage">
        <h1>About Me</h1>
        <p>
          Hi, <b>I'm Manickavasagan</b>,This is a Task Management System built using
          React for the frontend. It allows users to create, view, and manage
          tasks with different priority levels. The application features user
          authentication, a dashboard to view high-priority tasks, and detailed
          task views where users can update the status of their tasks. This
          project showcases my skills in React development, state management,
          and building user-friendly interfaces.
        </p>
      </div>
    </>
  );
};
