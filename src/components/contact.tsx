import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card";
  import { Phone, Mail, MessageSquare } from "lucide-react"; // Import icons from lucide-react
  
  const ContactForm: React.FC = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="icon_underline">Contact Info</CardTitle>
          <CardDescription>
          Feel Free to Contact Us Anytime, Anywhere! (Phone ,  Email , Message)

          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center hover:text-blue-500 transition duration-300 cursor-pointer text-lg"> {/* Increased font size */}
              <Phone className="mr-2" /> {/* Phone icon */}
              <span className="font-bold">Mobile No: <span className="font-normal">7275841548</span></span>
            </div>
            <div className="flex items-center hover:text-blue-500 transition duration-300 cursor-pointer text-lg"> {/* Increased font size */}
              <Mail className="mr-2" /> {/* Email icon */}
              <span className="font-bold">Email: <span className="font-normal">jayhinddv@gmail.com</span></span>
            </div>
            <div className="flex items-center hover:text-blue-500 transition duration-300 cursor-pointer text-lg"> {/* Increased font size */}
              <MessageSquare className="mr-2" /> {/* WhatsApp icon */}
              <span className="font-bold">WhatsApp No: <span className="font-normal">7275841548</span></span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {/* You can add a footer action here if needed */}
        </CardFooter>
      </Card>
    );
  };
  
  export default ContactForm;
  