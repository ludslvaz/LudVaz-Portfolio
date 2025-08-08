import Ecosystem from "./Ecosystem";

export default function Services() {

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-12 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Texto à esquerda */}
        <div className="text-start space-y-6">
          <h3 className="text-xl text-violet-400 font-medium mb-1">Services.</h3>
          <p className="text-foreground leading-relaxed mt-0 font-light">
            I offer a wide range of tailored services to meet your needs.
          </p>

          <div className="space-y-4 px-6">
            <div>
              <h4 className="font-semibold text-foreground">Frontend Development</h4>
              <p className="text-foreground leading-relaxed mt-2 font-light">
                I specialize in frontend development with a focus on creating responsive and user-friendly interfaces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">UI/UX Designing</h4>
              <p className="text-foreground leading-relaxed mt-2 font-light">
                I specialize in creating intuitive and visually appealing user interfaces tailored exactly to meet your needs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Full Stack Development</h4>
              <p className="text-foreground leading-relaxed mt-2 font-light">
                I specialize in full stack development with frontend heavy tasks.
              </p>
            </div>

            <p className="pt-2 text-sm">
              <span className="font-medium text-foreground">Want to work together?</span><br />
              <a href="https://mail.google.com/mail/?view=cm&to=ludvazdev@gmail.com&su=Quero%20trabalhar%20com%20você&body=Olá%2C%20vamos%20conversar!" target="_blank" className="text-violet-400 hover:underline font-medium mt-2">Contact now</a>
            </p>
          </div>
        </div>

         {/* Grade em retângulo com tecnologia central */}
         <Ecosystem />
        
      </div>
    </section>
  );
}
