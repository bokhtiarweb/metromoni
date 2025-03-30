import MobileViewProfile from "../Mobile/MobileDash/MobileViewProfile";
import ViewprofileContent from "./Contents/ViewprofileContent";

export default function ViewProfile() {
  return (
    <div className="py-4">
      <div className="hidden sm:block">
        <div className="grid sm:grid-cols-8 md:grid-cols-8 gap-2">
          <ViewprofileContent></ViewprofileContent>
          <div className="sm:col-span-3 md:col-span-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            similique rem consequuntur magnam, hic aliquid a provident,
            distinctio possimus quidem nam vel eveniet officia autem facere
            odit? Unde, id repellendus.
          </div>
          <ViewprofileContent></ViewprofileContent>
        </div>
      </div>

      <div className="block sm:hidden">
        <MobileViewProfile></MobileViewProfile>
      </div>
    </div>
  );
}
