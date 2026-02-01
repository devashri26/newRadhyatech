import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Search, Calendar, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cross-Border Staffing in 2024",
    excerpt: "Explore how global talent acquisition is evolving and what it means for businesses looking to expand internationally.",
    category: "Industry Insights",
    date: "Jan 15, 2024",
    image: "gradient-primary",
  },
  {
    id: 2,
    title: "Digital Transformation: A Roadmap for Success",
    excerpt: "Learn the key steps to successfully transform your business operations through technology.",
    category: "Technology",
    date: "Jan 10, 2024",
    image: "gradient-gold",
  },
  {
    id: 3,
    title: "Building Strong India-Sweden Business Relations",
    excerpt: "Discover the opportunities and best practices for fostering successful business partnerships between India and Sweden.",
    category: "Business",
    date: "Jan 5, 2024",
    image: "gradient-primary",
  },
  {
    id: 4,
    title: "Upskilling Your Workforce for the AI Era",
    excerpt: "Why continuous learning is essential and how to prepare your team for the future of work.",
    category: "Education",
    date: "Dec 28, 2023",
    image: "gradient-gold",
  },
  {
    id: 5,
    title: "The Rise of Remote Work: Best Practices",
    excerpt: "Tips and strategies for managing remote teams effectively across different time zones.",
    category: "Workforce",
    date: "Dec 20, 2023",
    image: "gradient-primary",
  },
  {
    id: 6,
    title: "Innovation Labs: Bridging Academia and Industry",
    excerpt: "How collaboration between universities and businesses drives innovation and creates opportunities.",
    category: "Industry Insights",
    date: "Dec 15, 2023",
    image: "gradient-gold",
  },
];

const categories = ["All", "Industry Insights", "Technology", "Business", "Education", "Workforce"];

const BlogPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              {t("blog.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("blog.search")}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className={`h-48 ${post.image} flex items-center justify-center`}>
                      <span className="font-display text-4xl font-bold text-primary-foreground opacity-50">
                        R
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        {t("blog.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
