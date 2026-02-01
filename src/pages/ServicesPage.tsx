import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Monitor, Users, GraduationCap, Handshake, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "tech",
      icon: Monitor,
      title: t("services.techConsulting"),
      desc: t("services.techConsultingDesc"),
      items: [
        t("services.digitalTransformation"),
        t("services.customSoftware"),
        t("services.projectManagement"),
      ],
    },
    {
      id: "staffing",
      icon: Users,
      title: t("services.staffing"),
      desc: t("services.staffingDesc"),
      items: [
        t("services.agileWorkforce"),
        t("services.executiveSearch"),
        t("services.rpo"),
      ],
    },
    {
      id: "education",
      icon: GraduationCap,
      title: t("services.education"),
      desc: t("services.educationDesc"),
      items: [
        t("services.corporateTraining"),
        t("services.overseasEducation"),
      ],
    },
    {
      id: "academia",
      icon: Handshake,
      title: t("services.academia"),
      desc: t("services.academiaDesc"),
      items: [
        t("services.innovationLabs"),
        t("services.placementSupport"),
        t("services.facultyExchange"),
      ],
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
              {t("services.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tech" className="max-w-5xl mx-auto">
            <TabsList className="w-full h-auto flex-wrap gap-2 bg-transparent justify-center mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg"
                >
                  <service.icon className="h-5 w-5 mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card border-0">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-8 w-8 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-display text-2xl font-bold mb-2">{service.title}</h2>
                          <p className="text-muted-foreground mb-6">{service.desc}</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {service.items.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              >
                                <ChevronRight className="h-5 w-5 text-secondary flex-shrink-0" />
                                <span className="font-medium">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-center mb-12"
          >
            All Our Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
