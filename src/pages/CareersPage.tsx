import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, Globe, Heart, Briefcase, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CareersPage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    { icon: BookOpen, title: t("careers.learning"), desc: t("careers.learningDesc") },
    { icon: Globe, title: t("careers.globalExposure"), desc: t("careers.globalExposureDesc") },
    { icon: Heart, title: t("careers.workLife"), desc: t("careers.workLifeDesc") },
  ];

  const openings = [
    {
      title: "Software/Web Developers",
      location: "Sweden / India (Remote)",
      type: "Full-time",
    },
    {
      title: "Academic Trainers",
      location: "India",
      type: "Full-time / Part-time",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "We've received your application. Our team will review it and get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
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
              {t("careers.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("careers.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-center mb-12"
          >
            {t("careers.whyWork")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center glass-card border-0 hover:glow-purple transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-gold flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-center mb-12"
          >
            {t("careers.openings")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-lg mb-1">{job.title}</h3>
                        <p className="text-muted-foreground text-sm mb-1">{job.location}</p>
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
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
                  {t("careers.applicationForm")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t("careers.fullName")}</Label>
                      <Input id="fullName" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("careers.email")}</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">{t("careers.expertise")}</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">Software Development</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="training">Academic Training</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">{t("careers.resume")}</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop or click to upload
                      </p>
                      <Input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whyJoin">{t("careers.whyJoin")}</Label>
                    <Textarea
                      id="whyJoin"
                      rows={4}
                      placeholder="Tell us about yourself and why you want to join our team..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : t("careers.submit")}
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

export default CareersPage;
