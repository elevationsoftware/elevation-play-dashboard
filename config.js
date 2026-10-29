// EPS Dashboard configuration.
// The publishable key is a PUBLIC client key by design — it is
// meant to ship inside web pages; the database's row-level
// policies (Step 8, migration S6) are what protect the data.
window.EPS_CONFIG = {
  // Username sign-in stays OFF until the eps-username-signin gate
  // is deployed live; TA flips this to true at that gate's closeout.
  usernameSignIn: false,
  // The Wizard: one sentence of Anthony's, shown behind The Wizard
  // button. Empty = the button stays hidden. Bump wizardVersion
  // with every new sentence — the gold dot keys off it.
  wizardText: "",
  wizardVersion: 0,
  url: "https://kbdaiiwdjkuhnbgbuosn.supabase.co",
  anonKey: "sb_publishable_fr7kiRO6QWa07ygamr1TIQ_wx4_Frg0",
};
