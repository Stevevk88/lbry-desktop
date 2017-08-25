import React from "react";
import { Icon } from "component/common";
import RewardLink from "component/rewardLink";
import rewards from "rewards.js";

class InviteList extends React.PureComponent {
  render() {
    const { invitees } = this.props;

    if (!invitees) {
      return null;
    }

    return (
      <section className="card">
        <div className="card__title-primary">
          <h3>{__("Invite History")}</h3>
        </div>
        <div className="card__content">
          {invitees.length === 0 &&
            <span className="empty">{__("You haven't invited anyone.")} </span>}
          {invitees.length > 0 &&
            <table className="table-standard table-stretch">
              <thead>
                <tr>
                  <th>
                    {__("Invitee Email")}
                  </th>
                  <th className="text-center">
                    {__("Invite Status")}
                  </th>
                  <th className="text-center">
                    {__("Reward")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {invitees.map((invitee, index) => {
                  return (
                    <tr key={index}>
                      <td>{invitee.email}</td>
                      <td className="text-center">
                        {invitee.invite_accepted
                          ? <Icon icon="icon-check" />
                          : <span className="empty">{__("unused")}</span>}
                      </td>
                      <td className="text-center">
                        {invitee.invite_reward_claimed
                          ? <Icon icon="icon-check" />
                          : <RewardLink
                              label={__("Claim")}
                              button="text"
                              reward_type={rewards.TYPE_FIRST_PUBLISH}
                            />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>}
        </div>
      </section>
    );
  }
}

export default InviteList;
