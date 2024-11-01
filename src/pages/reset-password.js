import React from "react";
import Link from "next/link";
import http from "../../helpers/http";
import Text from "../../components/text";


export const getServerSideProps = async (context) => {
  const result = await http
    .get("reset-password")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};


export default function Reset_password({result}) {
  console.log(result)
  const {content, siteSettings}=result

  return (
    <div>
     
        <div className="contain">
          <div className="login_header">
            <div className="logon_logo">
              <Link href="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="btn_blk">
              <Link href="" className="">
                Don’t have an account? <strong>Get started today</strong>
              </Link>
            </div>
          </div>
        </div>

        <section id="login">
          <div className="contain">
            <div className="outer">
              <h3><Text string={content.description1}/></h3>

              <form>
                <div className="form_blk">
                  <label>New Password</label>
                  <input
                    id=""
                    type=""
                    name=""
                    autoComplete="name"
                    placeholder="Enter new password"
                    className="input"
                    required
                  />
                </div>
                <div className="form_blk">
                  <label>Confirm New Password</label>
                  <input
                    id=""
                    type=""
                    name=""
                    autoComplete="name"
                    placeholder="Confirm new password"
                    className="input"
                    required
                  />
                  <img class="eye" src="/images/eye.svg"></img>
                </div>

                <div className="btn_blk">
                  <button className="site_btn block">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  );
}
