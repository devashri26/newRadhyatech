import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userType, setUserType] = useState("client");

  const offices = [
    {
      name: t("contact.swedenOffice"),
      address: "Storgatan 15, 211 34 Malmö, Sweden",
      phone: "+46 40 123 4567",
      email: "sweden@radhyatech.com",
    },
    {
      name: t("contact.indiaOffice"),
      address: "Aundh Road, Pune 411007, Maharashtra, India",
      phone: "+91 20 1234 5678",
      email: "india@radhyatech.com",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Create mailto link
    const subject = encodeURIComponent(`Contact Form - ${userType} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${userType}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:devashri26@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink);
    
    toast({
      title: "Mail Client Opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setUserType("client");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full glass-card border-0 hover:glow-purple transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-4">{office.name}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="h-5 w-5 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 flex-shrink-0" />
                        <span>{office.email}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-center">
                  {t("contact.inquiryForm")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label>{t("contact.userType")}</Label>
                    <RadioGroup
                      value={userType}
                      onValueChange={setUserType}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="client" id="client" />
                        <Label htmlFor="client" className="cursor-pointer">{t("contact.client")}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="candidate" id="candidate" />
                        <Label htmlFor="candidate" className="cursor-pointer">{t("contact.candidate")}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partner" id="partner" />
                        <Label htmlFor="partner" className="cursor-pointer">{t("contact.partner")}</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input id="name" name="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        {t("contact.send")} <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
