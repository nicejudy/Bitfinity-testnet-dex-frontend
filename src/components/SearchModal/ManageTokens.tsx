import { useRef, RefObject, useCallback, useState, useMemo } from 'react'
import { Token } from 'libraries/swap-sdk'
import { Text, Button, DeleteOutlineIcon, IconButton, BscScanIcon, Input, Link } from 'components'
import styled from 'styled-components'
import Row, { RowBetween, RowFixed } from 'components/Layout/Row'
import { useToken } from 'hooks/Tokens'
import { useRemoveUserAddedToken } from 'state/user/hooks'
import useUserAddedTokens from 'state/user/hooks/useUserAddedTokens'
import { CurrencyLogo } from 'components/Logo'
import { getBlockExploreLink, safeGetAddress } from 'utils'
import { useActiveChainId } from 'hooks/useActiveChainId'
import Column, { AutoColumn } from '../Layout/Column'
import ImportRow from './ImportRow'
import { CurrencyModalView } from './types'

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function ManageTokens({
  setModalView,
  setImportToken,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
}) {
  const { chainId } = useActiveChainId()

  const [searchQuery, setSearchQuery] = useState<string>('')

  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>()
  const handleInput = useCallback((event) => {
    const input = event.target.value
    const checksummedInput = safeGetAddress(input)
    setSearchQuery(checksummedInput || input)
  }, [])

  // if they input an address, use it
  const searchToken = useToken(searchQuery)

  // all tokens for local list
  const userAddedTokens: Token[] = useUserAddedTokens()
  const removeToken = useRemoveUserAddedToken()

  const handleRemoveAll = useCallback(() => {
    if (chainId && userAddedTokens) {
      userAddedTokens.forEach((token) => {
        return removeToken(chainId, token.address)
      })
    }
  }, [removeToken, userAddedTokens, chainId])

  const tokenList = useMemo(() => {
    return (
      chainId &&
      userAddedTokens.map((token) => (
        <RowBetween key={token.address} width="100%">
          <RowFixed>
            <CurrencyLogo currency={token} size="20px" />
            <Link
              external
              href={getBlockExploreLink(token.address, 'address', chainId)}
              color="textSubtle"
              ml="10px"
              mr="3px"
            >
              {token.symbol}
            </Link>
            <a href={getBlockExploreLink(token.address, 'token', chainId)} target="_blank" rel="noreferrer noopener">
              <BscScanIcon width="20px" color="textSubtle" />
            </a>
          </RowFixed>
          <RowFixed>
            <IconButton variant="text" onClick={() => removeToken(chainId, token.address)}>
              <DeleteOutlineIcon color="textSubtle" />
            </IconButton>
          </RowFixed>
        </RowBetween>
      ))
    )
  }, [userAddedTokens, chainId, removeToken])

  const isAddressValid = searchQuery === '' || safeGetAddress(searchQuery)

  return (
    <Wrapper>
      <Column style={{ width: '100%', flex: '1 1' }}>
        <AutoColumn gap="14px">
          <Row>
            <Input
              id="token-search-input"
              scale="lg"
              placeholder="0x0000"
              value={searchQuery}
              autoComplete="off"
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              isWarning={!isAddressValid}
            />
          </Row>
          {!isAddressValid && <Text color="failure">Enter valid token address</Text>}
          {searchToken && (
            <ImportRow
              token={searchToken}
              showImportView={() => setModalView(CurrencyModalView.importToken)}
              setImportToken={setImportToken}
              style={{ height: 'fit-content' }}
            />
          )}
        </AutoColumn>
        {tokenList}
        <Footer>
          <Text bold color="textSubtle">
            {userAddedTokens?.length} {userAddedTokens.length === 1 ? 'Imported Token' : 'Imported Tokens'}
          </Text>
          {userAddedTokens.length > 0 && (
            <Button variant="tertiary" onClick={handleRemoveAll}>
              Clear all
            </Button>
          )}
        </Footer>
      </Column>
    </Wrapper>
  )
}