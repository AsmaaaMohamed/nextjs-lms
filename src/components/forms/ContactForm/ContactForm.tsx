"use client";

import { DOMAIN } from "@/utils/constants";
import { contactSchema } from "@/utils/validationSchemas";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async(values,{ resetForm }) => {
      try{
        const res =await fetch(`${DOMAIN}/api/send`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({...values}),
                });
        const data = await res.json();
        //console.log('rrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeesssssss' , data.error.message);
        if(!res.ok){
          throw data.error.message
        }
        
        toast.success("Your Message has been sent successfully");
        resetForm();
      }
      catch(error:any){
        console.log('errrrrrrrooooooooooo', error);
        toast.error(error)
      }
    },
  });
  return (
    <Form className="contact-form" onSubmit={formik.handleSubmit}>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={!formik.errors.name && formik.touched.name}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        {formik.errors.name && formik.touched.name ? (
          <Form.Control.Feedback type="invalid" className="d-block">
            {formik.errors.name}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="email"
          placeholder="Your Email *"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={!formik.errors.email && formik.touched.email}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        {formik.errors.email && formik.touched.email ? (
          <Form.Control.Feedback type="invalid" className="d-block">
            {formik.errors.email}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="mobile"
          placeholder="Mobile Number *"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={!formik.errors.mobile && formik.touched.mobile}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        {formik.errors.mobile && formik.touched.mobile ? (
          <Form.Control.Feedback type="invalid" className="d-block">
            {formik.errors.mobile}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="subject"
          placeholder="Your Subject *"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isValid={formik.touched.subject && !formik.errors.subject}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        {formik.errors.subject && formik.touched.subject ? (
          <Form.Control.Feedback type="invalid" className="d-block">
            {formik.errors.subject}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group w-100">
        <Form.Control
          rows={8}
          as="textarea"
          name="message"
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="form-group w-100 text-center">
        <Button className="lab-btn" type="submit">
          <span>Send our Message</span>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
