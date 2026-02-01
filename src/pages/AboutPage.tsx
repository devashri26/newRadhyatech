import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Award, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Heart, title: t("about.customerCentricity"), desc: t("about.customerCentricityDesc") },
    { icon: Shield, title: t("about.integrity"), desc: t("about.integrityDesc") },
    { icon: Lightbulb, title: t("about.innovation"), desc: t("about.innovationDesc") },
    { icon: Award, title: t("about.excellence"), desc: t("about.excellenceDesc") },
    { icon: Users, title: t("about.collaboration"), desc: t("about.collaborationDesc") },
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("about.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card border-0 hover:glow-purple transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-1 gradient-gold rounded-full mb-4" />
                  <h2 className="font-display text-2xl font-bold mb-4">{t("about.vision")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.visionText")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card border-0 hover:glow-gold transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-1 gradient-primary rounded-full mb-4" />
                  <h2 className="font-display text-2xl font-bold mb-4">{t("about.mission")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.missionText")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("about.values")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("about.founder")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Profile Image Placeholder */}
                  <div className="gradient-primary aspect-square md:aspect-auto flex items-center justify-center p-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="font-display text-5xl md:text-7xl font-bold text-primary-foreground">AP</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2 p-8">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium gradient-gold text-foreground mb-4">
                      15+ Years Experience
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-1">{t("about.founderName")}</h3>
                    <p className="text-gradient font-medium mb-4">{t("about.founderRole")}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t("about.founderBio")}
                    </p>
                    <div className="relative pl-6 border-l-4 border-secondary">
                      <Quote className="absolute -left-3 -top-1 h-6 w-6 text-secondary bg-card" />
                      <p className="italic text-foreground">
                        {t("about.founderQuote")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
