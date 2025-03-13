import React from "react";

export default function TermConditionmodal({Id}) {
  return (
    <dialog id={Id} className="modal sm:hidden">
      <div className="modal-box h-screen max-w-xs p-4">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div>
          <strong className="text-lg text-[#6699cc]">Terms & Condition</strong>
          <div className="mt-4">
            <strong>Welcome to bangladehimetriomny</strong>
            <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore architecto reprehenderit quia, veniam nobis exercitationem laboriosam nemo iusto quis tempore facilis quae cumque animi atque maiores quidem expedita est.
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
