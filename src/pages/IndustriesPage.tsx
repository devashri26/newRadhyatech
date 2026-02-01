import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Monitor, Cog, GraduationCap, Radio, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IndustriesPage = () => {
  const { t } = useTranslation();

  const industries = [
    {
      icon: Monitor,
      title: t("industries.it"),
      desc: t("industries.itDesc"),
    },
    {
      icon: Cog,
      title: t("industries.engineering"),
      desc: t("industries.engineeringDesc"),
    },
    {
      icon: GraduationCap,
      title: t("industries.academic"),
      desc: t("industries.academicDesc"),
    },
    {
      icon: Radio,
      title: t("industries.telecom"),
      desc: t("industries.telecomDesc"),
    },
    {
      icon: Briefcase,
      title: t("industries.professional"),
      desc: t("industries.professionalDesc"),
    },
  ];

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
              {t("industries.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("industries.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index === industries.length - 1 && industries.length % 3 !== 0 ? "lg:col-start-2" : ""}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="gradient-primary p-6 group-hover:scale-105 transition-transform duration-300 origin-top">
                      <industry.icon className="h-12 w-12 text-primary-foreground mb-4" />
                      <h3 className="font-display font-bold text-xl text-primary-foreground">
                        {industry.title}
                      </h3>
                    </div>
                    {/* Body */}
                    <div className="p-6">
                      <p className="text-muted-foreground">{industry.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Our expertise extends beyond these sectors. Contact us to discuss how we can 
              tailor our solutions to meet your specific industry requirements.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
