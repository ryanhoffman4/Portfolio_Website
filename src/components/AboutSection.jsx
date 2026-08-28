import { Code, Sigma, Briefcase } from "lucide-react";

export const AboutSection = () => {

    return (

        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Programmer and Mathematician
                        </h3>

                        <p className="text-muted-foreground">
                                After earning a Bachelor's degree in Mathematics from Washington State University, 
                            I will graduate with a second Bachelor's in Computer Science in June 2027.  
                            This webpage is a basic template for showcasing my ongoing projects throughout 
                            the next school year and beyond.  I hope to use my background in Calculus, 
                            Linear Algebra and Statistics as a stepping stone into AI and Data Science.
                        </p>

                        <p className="text-muted-foreground">
                                My programming style is methodical and linear, developing an intuition for 
                            avoiding bugs outright. My ground-up approach to programming grows an ever-deepening
                            understanding of computer architecture to help detect root causes of errors as they occur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Programming </h4>
                                    <p className="text-muted-foreground">
                                        Full stack developer with a ground-up approach,
                                        striving to understand all components of computers
                                    </p>
                                </div>
                            </div>
                        </div>
                            
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Sigma className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Mathematics </h4>
                                    <p className="text-muted-foreground">
                                        Inspired by theoretical models,
                                        always focused on projects incorporating linear algebra and calculus
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground">
                                        Organized around teamwork, clear communication, 
                                        and excellence in the final product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};