import { CHAIN_IDS } from 'utils/wagmi'
import Farms from 'views/Farms'

const FarmsPage = () => <Farms />

FarmsPage.chains = CHAIN_IDS

export default FarmsPage