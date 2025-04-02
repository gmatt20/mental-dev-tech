import TrafficLights from "@/components/ui/TrafficLights";

export default function LandingWelcome(){
  return (
    <div className="my-20 -z-10 lg:mx-20 bg-darker p-8 rounded-lg">
      <TrafficLights />
      <div className="mt-5">
        <div className="mb-5">
          <h1 className="text-3xl leading-10 mb-2">
            &quot;What keeps bringing me back to software development is the love and
            thrill of building software.&quot;
          </h1>
          <p>- Matthew Garcia</p>
        </div>
        <p className="text-left text-xl leading-10">
          Hello! I’m Matthew, a software developer specializing in frontend web
          development. I focus on building beautiful, responsive, and
          user-friendly interfaces that not only look great but feel amazing to
          use.
        </p>
      </div>
    </div>
  );
}