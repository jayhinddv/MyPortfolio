import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "./ui/button";
//import { SendEmail } from "./SendEmail";

interface ContactmyFormData {
  name: string;
  SenderEmail: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [myFormData, setmyFormData] = useState<ContactmyFormData>({
    name: "",
    SenderEmail: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setmyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //await SendEmail(myFormData);
    // Optionally, reset the form or redirect
    setmyFormData({ name: "", SenderEmail: "", message: "" });
    // Redirect to homepage or show a success message
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once the form is submitted, you will be redirected to the home page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={myFormData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              value={myFormData.SenderEmail}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              value={myFormData.message}
              onChange={handleChange}
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
