import { Dami, Request, Response, NextFunction, Url, isEmpty, DamiConfigure } from '@damijs/core';
import Ans from'../models/Ans';


function ServerRender(req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next();
  }
  const baseUrl = Dami.baseUrl + req.originalUrl
  const logoUrl = Dami.baseUrl + "/static/logo.png"

  switch (req.path) {
    case "/guest":
      return login(req, res, next)
    case "/guest/forgot-password":
      return forgot(req, res, next)
    case "/guest/signup":
      return signup(req, res, next)
    case "/page/privacy-policy":
      return pagePolicy(req, res, next)
    case "/page/faq":
      return pageFaq(req, res, next)
    case "/page/terms-and-conditions":
      return pageTerms(req, res, next)
    case "/page/blog":
      return pageBlog(req, res, next)
    case "/post":
      return post(req, res, next)
    case "/profile":
      return profile(req, res, next)
    case "/admin":
      return admin(req, res, next)
    case "/":
      return home(req, res, next)
    default:
      return notfound(req, res, next)
  }


  function title(res: Response, title: string) {
    res.title = title
  }

  function setMeta(res: Response, meta: object[]) {
    res.meta = meta
  }
  function login(req, res, next) {
    title(res, "Login | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Login | " + Dami.appName
      },
      {
        property: "og:description",
        content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function forgot(req, res, next) {
    title(res, "Forgot Password | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Forgot Password | " + Dami.appName
      },
      {
        property: "og:description",
        content: "In case you have forgot your password, enter your email and get a OTP to reset your password"
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function signup(req, res, next) {
    title(res, "Signup | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Signup | " + Dami.appName
      },
      {
        property: "og:description",
        content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function home(req, res, next) {
    title(res, "Feeds - Home | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Feeds - Home | " + Dami.appName
      },
      {
        property: "og:description",
        content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function admin(req, res, next) {
    title(res, "Admin | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Admin | " + Dami.appName
      },
      {
        property: "og:description",
        content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }
  function profile(req, res, next) {
    title(res, "User Profile | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Blog | " + Dami.appName
      },
      {
        property: "og:description",
        content: "User post, story, personal detail, account detail"
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }
  function pageBlog(req, res, next) {
    title(res, "Blog | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Blog | " + Dami.appName
      },
      {
        property: "og:description",
        content: "The democratic principles and their ideals enshrined within the Rig Veda were known to the globe through the practice of direct democracy in Athens, Greece."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function pageFaq(req, res, next) {
    title(res, "Frequently Asked Questions | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions | " + Dami.appName
      },
      {
        property: "og:description",
        content: "It is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function pageTerms(req, res, next) {
    title(res, "Terms of Service | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Terms of Service | " + Dami.appName
      },
      {
        property: "og:description",
        content: "These Terms of Service govern your access to and use of the service (“Referendum 2.0”), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the services is collectively said as 'content'."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function pagePolicy(req, res, next) {
    title(res, "Privacy Policy | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Privacy Policy | " + Dami.appName
      },
      {
        property: "og:description",
        content: "Referendum 2.0 at https://ventvoila.com instantly connects people to debate meaningful ideas, issues and agendas raised by their peers. Any registered user can post idea issue and agenda that's public by default and may include other content like photos, videos and documents to support their post."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  async function post(req, res, next) {
    const model = new Ans()
    const post = await model.find(q => {
      return q.andWhere({ 'post.id': req.query.id }).orWhere({ 'post.post_id': req.query.id })
    }).one()
    if (isEmpty(post)) {
      return notfound(req, res, next)
    }
    title(res, post.post_detail + " | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: post.post_detail + " | " + Dami.appName
      },
      {
        property: "og:description",
        content: Dami.appName + " is a platform designed to enable dynamic decision-making, liquid representation, and sound governance through collective intelligence in any political culture."
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

  function notfound(req, res, next) {
    title(res, "Not Found | " + Dami.appName)
    const meta = [
      {
        property: "og:url",
        content: baseUrl
      },
      {
        property: "og:title",
        content: "Not Found | " + Dami.appName
      },
      {
        property: "og:description",
        content: "The page you are looking for does not exist or has been removed"
      },
      {
        property: "og:image",
        content: logoUrl
      },
    ]
    setMeta(res, meta);
    return next()
  }

}

export default ServerRender;
