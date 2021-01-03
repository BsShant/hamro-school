import React from 'react';
import { InputWrapper, SearchBoxWrapper } from './search-box.styles';
import PageviewIcon from '@material-ui/icons/Pageview';

const SearchBox = () =>{

    return(
        <SearchBoxWrapper>
            <PageviewIcon />
            <InputWrapper>
            <input type="search" placeholder='Find Something...' />
            </InputWrapper>
        </SearchBoxWrapper>
    )
}

export default SearchBox;