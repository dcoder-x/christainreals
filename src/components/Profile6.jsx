import React from "react";
import { CheckBox, Select } from "./Formcomps";

const Profile6 = () => {
  return (
    <form>
      <Select
        options={[
          "When alone with them",
          "When in the company of friends",
          "When in a large gathering ",
          "No preference",
        ]}
        name={"easeWithPartner"}
        label={"When would you feel most at ease with a partner?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Their father is overbearing and controlling",
          "Their mother is overprotective and controlling",
          "Their friends have too much influence over them",
        ]}
        name={"worrry"}
        label={"What would bother you most about those close to your partner?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={["Yes", "No"]}
        name={"oppositeSexFriends"}
        label={
          "Would you be comfortable if your partner keeps friends of the opposite sex that you are not friends with?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Yes – I don’t see them as a threat",
          "No – Exes should remain in the past",
        ]}
        name={"exes"}
        label={
          "Would you be comfortable if your partner still maintains a close friendship with their ex?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Cheating",
          "Domestic Violence",
          "Verbal Abuse",
          "Dishonesty",
        ]}
        name={"offense"}
        label={
          "What is the gravest offence your partner can commit against you?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "I’ll try to stop it there and then.",
          "I’ll keep my frustration bottled up and say/do nothing.",
          "I’ll start flirting with someone else. After all two can play the game.",
          "            No big deal. I know they are mine.",
        ]}
        name={"flirtingPartner"}
        label={
          "Imagine you're at a party with your partner and you notice that they're flirting with someone else. How would you react?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
            'Access their phone secretly to find out what’s going. You don’t want to be left guessing.',
            'Ask them directly what’s going on. You trust they’ll be honest with you.',
            'Do nothing. After all what you don’t know won’t hurt you.',
            
        ]}
        name={"flirtingPartner"}
        label={
          "You suspect that your partner has been messaging and calling someone of the opposite sex and you are worried that they may be having an affair. What would you do?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      
    </form>
  );
};
export default Profile6;
