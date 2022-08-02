import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

async function signInWithTwitter() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "twitter",
  });
}

export default function Auth() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">login for yaosamo</h1>
        <div>
          <button
            onClick={() => signInWithTwitter()}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Login with Twitter"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
