
export const TestContactform = () => {
    function Contact() {
        const form: any = useRef();
      
        const sendEmail = (e: any) => {
          e.preventDefault();
      
          emailjs
            .sendForm(
              "service_27otgd3",
              "template_nu3nlna",
              form.current,
              "wRGAYlk4r9LSqyEFS"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          form.current.reset();
        };

  return (
    <form >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
