import React, { useState } from 'react';
import SelectInputWithImage from 'components/inputs/SelectInputWithImage';
import CircularProgress from 'components/inputs/adornments/InputLoadingSpinner';
import useUser from 'store/UserContext';

const NetworkAccountSwitcher = (props) => {
  const { accounts, defaultAccounts, changeDefaultAccount } = useUser();
  const { network } = props;

  const accountOptions = (accounts[network] || []).map((a) => {
    return { name: a.name, value: a.id };
  });

  const onChange = (e) => {
    changeDefaultAccount(network, e.target.value);
  };

  if (!defaultAccounts[network]) return <CircularProgress size={35} />;

  return (
    <SelectInputWithImage
      check
      image={`/images/${network}.png`}
      options={accountOptions}
      image_size={40}
      labelProps={{
        shrink: Boolean(defaultAccounts[network]),
      }}
      value={defaultAccounts[network]}
      placeholder='Select Account'
      label='Select Account'
      onChange={onChange}
    />
  );
};

export default NetworkAccountSwitcher;
