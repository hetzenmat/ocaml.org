

import * as React from "react";
import Link from "next/link";

function CommunityMailingLists$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mb-6"
            }, children);
}

var P = {
  make: CommunityMailingLists$P
};

function CommunityMailingLists$H1(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "font-sans text-4xl font-bold leading-snug mb-2"
            }, children);
}

var H1 = {
  make: CommunityMailingLists$H1
};

function CommunityMailingLists$H2(Props) {
  var children = Props.children;
  var id = Props.id;
  return React.createElement("h2", {
              className: "font-sans text-2xl font-bold leading-normal mb-2",
              id: id
            }, children);
}

var H2 = {
  make: CommunityMailingLists$H2
};

function CommunityMailingLists$H3(Props) {
  var children = Props.children;
  var id = Props.id;
  return React.createElement("h3", {
              className: "font-sans text-lg font-bold leading-normal mb-3",
              id: id
            }, children);
}

var H3 = {
  make: CommunityMailingLists$H3
};

function CommunityMailingLists$AEXT(Props) {
  var children = Props.children;
  var href = Props.href;
  return React.createElement("a", {
              className: "text-ocamlorange hover:underline",
              href: href,
              target: "_blank"
            }, children);
}

var AEXT = {
  make: CommunityMailingLists$AEXT
};

function CommunityMailingLists$ITAL(Props) {
  var children = Props.children;
  return React.createElement("span", {
              className: "italic"
            }, children);
}

var ITAL = {
  make: CommunityMailingLists$ITAL
};

function CommunityMailingLists$AFRAG(Props) {
  var children = Props.children;
  var href = Props.href;
  return React.createElement(Link, {
              href: href,
              children: React.createElement("a", {
                    className: "text-ocamlorange hover:underline"
                  }, children)
            });
}

var AFRAG = {
  make: CommunityMailingLists$AFRAG
};

function CommunityMailingLists$LeftNav(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h3", {
                  className: "font-sans text-lg font-bold text-gray-700 leading-normal mb-2"
                }, "Contents"), React.createElement("ul", {
                  className: "list-disc list-inside text-sm font-bold pl-3"
                }, React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                          children: "Web Forums",
                          href: "#web-forums"
                        })), React.createElement("ul", {
                      className: "pl-6 list-disc list-inside"
                    }, React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "Discuss at OCaml.org",
                              href: "#discuss-at-ocamlorg"
                            }))), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                          children: "Mailing Lists",
                          href: "#mailing-lists"
                        })), React.createElement("ul", {
                      className: "pl-6 list-disc list-inside"
                    }, React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "Official OCaml List",
                              href: "#official-ocaml-list"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "OCaml Jobs and Internships",
                              href: "#ocaml-jobs-and-internships"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "OCaml Announcements",
                              href: "#ocaml-announcements"
                            }))), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                          children: "Discussion Groups",
                          href: "#discussion-groups"
                        })), React.createElement("ul", {
                      className: "pl-6 list-disc list-inside"
                    }, React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "IRC Channel - English",
                              href: "#irc-channel--english"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "Discord Server",
                              href: "#discord-server"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "IRC Channel - French",
                              href: "#irc-channel--french"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "About ML",
                              href: "#about-ml"
                            })), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "About Functional Languages",
                              href: "#about-functional-languages"
                            }))), React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                          children: "Other",
                          href: "#other"
                        })), React.createElement("ul", {
                      className: "pl-6 list-disc list-inside"
                    }, React.createElement("li", undefined, React.createElement(CommunityMailingLists$AFRAG, {
                              children: "Bug Tracker",
                              href: "#bug-tracker"
                            })))));
}

var LeftNav = {
  make: CommunityMailingLists$LeftNav
};

function $$default(param) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "flex"
                }, React.createElement("div", {
                      className: "flex-none w-1/3 pt-12 pr-4"
                    }, React.createElement(CommunityMailingLists$LeftNav, {})), React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(CommunityMailingLists$H1, {
                          children: "Mailing Lists and Web Forums"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, "Mailing lists and other forums used to discuss OCaml in \n    general are listed below. There are thousands of other forums related to \n    individual projects. Several mailing lists are hosted on the ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "lists.ocaml.org",
                              href: "http://lists.ocaml.org"
                            }), " domain. Projects on ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "GitHub",
                              href: "https://github.com/trending?l=ocaml&since=monthly"
                            }), " actively use GitHub's Issue system for discussions."), React.createElement(CommunityMailingLists$H2, {
                          children: "Web Forums",
                          id: "web-forums"
                        }), React.createElement(CommunityMailingLists$H3, {
                          children: "Discuss at OCaml.org",
                          id: "discuss-at-ocamlorg"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$AEXT, {
                              children: "discuss.ocaml.org",
                              href: "https://discuss.ocaml.org"
                            }), "This is the most active forum about OCaml. Topics are grouped into a \n    variety of categories, which can be followed independently. This forum welcomes \n    people at all levels of proficiency, including beginners. A mailing-list mode \n    is also available for those who wish to receive all messages."), React.createElement(CommunityMailingLists$P, {
                          children: "Most categories are in English but categories in other languages \n    are welcome."
                        }), React.createElement(CommunityMailingLists$H2, {
                          children: "Mailing Lists",
                          id: "mailing-lists"
                        }), React.createElement(CommunityMailingLists$H3, {
                          children: "Official OCaml List",
                          id: "official-ocaml-list"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "caml-list AT inria.fr"
                            }), " The OCaml mailing list is intended for all \n    users of the OCaml implementations developed at Inria. The purpose of this list is \n    to share experience, exchange ideas and code, and report on applications of the \n    OCaml language. This list is not moderated, but posting is restricted to the \n    subscribers of the list. Messages are generally in English but sometimes also in French."), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$AEXT, {
                              children: "Subscribe",
                              href: "https://sympa.inria.fr/sympa/subscribe/caml-list"
                            }), " | ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "OCaml Archives",
                              href: "https://inbox.ocaml.org/caml-list"
                            }), " | ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "Inria Archives",
                              href: "https://sympa.inria.fr/sympa/arc/caml-list"
                            })), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, "The ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "OCaml Weekly News",
                              href: "http://alan.petitepomme.net/cwn/"
                            }), " also provides a curated summary of camll-list discussions."), React.createElement(CommunityMailingLists$H3, {
                          children: "OCaml Jobs and Internships",
                          id: "ocaml-jobs-and-internships"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "ocaml-jobs AT inria.fr"
                            }), " This list is for exchanges \n    between people looking for a job or an internship requiring skills \n    in OCaml and people, corporations, universities, ..., offering such jobs \n    or internships."), React.createElement(CommunityMailingLists$P, {
                          children: React.createElement(CommunityMailingLists$AEXT, {
                                children: "(Un)subscribe",
                                href: "https://sympa.inria.fr/sympa/info/ocaml-jobs"
                              })
                        }), React.createElement(CommunityMailingLists$H3, {
                          children: "OCaml Announcements",
                          id: "ocaml-announcements"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "caml-announce AT inria.fr"
                            }), " This is a low-traffic, moderated list \n    for announcements of OCaml releases and new OCaml-related software, libraries, \n    documents, etc."), React.createElement(CommunityMailingLists$P, {
                          children: React.createElement(CommunityMailingLists$AEXT, {
                                children: "(Un)subscribe",
                                href: "https://sympa.inria.fr/sympa/subscribe/caml-announce"
                              })
                        }), React.createElement(CommunityMailingLists$H2, {
                          children: "Discussion Groups",
                          id: "discussion-groups"
                        }), React.createElement(CommunityMailingLists$H3, {
                          children: "IRC Channel - English",
                          id: "irc-channel--english"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "irc.freenode.net #ocaml"
                            }), " This is a real-time communication channel, where \n    you can ask for help. There are about a hundred users hanging around; don't ask \n    if you can ask, just ask, and be patient: not everyone is in the same timezone. \n    The IRC Channel can be accessed through a web interface or any regular IRC client."), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, "Public channel logs are available at ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "http://irclog.whitequark.org/ocaml/",
                              href: "http://irclog.whitequark.org/ocaml/"
                            })), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, "If you wish to use a web-based IRC client, you can use Freenode's webchat ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "https://webchat.freenode.net/",
                              href: "https://webchat.freenode.net/"
                            }), "."), React.createElement(CommunityMailingLists$H3, {
                          children: "Discord Server",
                          id: "discord-server"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$AEXT, {
                              children: "discord link",
                              href: "https://discord.gg/cCYQbqN"
                            }), ": As a more recent addition to the OCaml community, the OCaml discord \n    server benefits from the proximity of the ReasonML community's discord server, as well \n    as discord's ability to have multiple channels. One of the channels is called #IRC, \n    and automatically connects to the main IRC channel."), React.createElement(CommunityMailingLists$H3, {
                          children: "IRC Channel - French",
                          id: "irc-channel--french"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "irc.freenode.net #ocaml-fr"
                            }), " As above, but for French speakers."), React.createElement(CommunityMailingLists$H3, {
                          children: "About ML",
                          id: "about-ml"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "comp.lang.ml"
                            }), " This is a moderated Usenet newsgroup about all variants of ML. \n    Discussions generally concern Standard ML implementations (such as SML-NJ), but some threads \n    concern the OCaml branch."), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$AEXT, {
                              children: "Archives at Google Groups",
                              href: "http://groups.google.com/groups?group=comp.lang.ml"
                            }), " | ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "FAQ",
                              href: "http://www.faqs.org/faqs/meta-lang-faq/"
                            })), React.createElement(CommunityMailingLists$H3, {
                          children: "About Functional Languages",
                          id: "about-functional-languages"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$ITAL, {
                              children: "comp.lang.functional"
                            }), " This is an unmoderated usenet newsgroup for the discussion \n    of all aspects of functional programming languages, including their design, application, \n    theoretical foundation, and implementation. Discussions concern all families of functional \n    programming languages including non-strict ones (e.g. Haskell) and strict ones (e.g. Scheme, \n    SML or OCaml)."), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, React.createElement(CommunityMailingLists$AEXT, {
                              children: "Archives at Google Groups",
                              href: "http://groups.google.com/groups?group=comp.lang.functional"
                            }), " | ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "FAQ",
                              href: "http://www.cs.nott.ac.uk/~gmh/faq.html"
                            })), React.createElement(CommunityMailingLists$H2, {
                          children: "Other",
                          id: "other"
                        }), React.createElement(CommunityMailingLists$H3, {
                          children: "Bug Tracker",
                          id: "bug-tracker"
                        }), React.createElement(CommunityMailingLists$P, {
                          children: null
                        }, "Use ", React.createElement(CommunityMailingLists$AEXT, {
                              children: "Github issues",
                              href: "https://github.com/ocaml/ocaml/issues"
                            }), " to request features or report bugs."))));
}

var Link$1;

export {
  Link$1 as Link,
  P ,
  H1 ,
  H2 ,
  H3 ,
  AEXT ,
  ITAL ,
  AFRAG ,
  LeftNav ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
