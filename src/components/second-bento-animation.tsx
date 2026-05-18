import { BrandMark } from "@/components/brand-logo";
import {
  IntegrationOrbitIcon,
  integrationOrbitIconSets,
} from "@/components/integration-orbit-icon";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t from-background to-transparent" />

      <div className="pointer-events-none absolute top-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-background to-transparent" />

      <div className="absolute top-1/2 left-1/2 z-30 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black p-2 md:bottom-0 md:top-auto">
        <BrandMark className="size-10" onDark />
      </div>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full translate-y-0 items-center justify-center md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            {integrationOrbitIconSets.inner.map((Icon) => (
              <IntegrationOrbitIcon key={Icon.name} icon={Icon} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            {integrationOrbitIconSets.middle.map((Icon) => (
              <IntegrationOrbitIcon key={Icon.name} icon={Icon} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            {integrationOrbitIconSets.outer.map((Icon) => (
              <IntegrationOrbitIcon key={Icon.name} icon={Icon} />
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

