import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
    category: "",
  });

  function onChange(event) {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    const newContact = {
      name: contact.name,
      email: contact.email,
      description: contact.description,
      category: "None",
    };

    axios
      .post("https://new.sepaystudio.com/api/contacts", newContact)
      .then((res) => console.log(res.data));
    const msg = `Halo, nama saya ${newContact.name}. Saya ingin ...`;
    window.location = `https://wa.me/+6281232063424?text=${msg.replace(/ /g, "%20")}`;
  }

  return (
    <div
      className='flex flex-col w-full px-12 py-20 mx-auto mb-20 space-y-6 mycontainer'
      id='contact'
    >
      <h1 className='text-[#0969B2] text-3xl font-semibold md:hidden'>
        Lets discuss your project!
      </h1>
      <h1 className='hidden text-3xl font-semibold text-center text-white md:block'>
        Lets discuss <b className='font-semibold text-[#EEB94A]'>your</b> project!
      </h1>

      <form
        onSubmit={onSubmit}
        className='flex flex-col w-full p-5 space-y-6 border md:p-10 rounded-3xl drop-shadow-md'
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={onChange}
          className='p-3 border rounded-xl font-extralight'
        />
        <input
          type='text'
          name='email'
          placeholder='E-Mail'
          onChange={onChange}
          className='p-3 border rounded-xl font-extralight'
        />
        <input
          type='text'
          name='description'
          placeholder='Project Description'
          onChange={onChange}
          className='p-3 border rounded-xl font-extralight'
        />
        <button
          type='submit'
          className='font-bold py-2 px-6 text-center rounded-full text-2xl bg-gradient-to-b from-[#F7B840] via-[#FDD892] to-[#F3CE88] text-[#0667AE]'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
