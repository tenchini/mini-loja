import styled, {keyframes} from 'styled-components'

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`

const SkeletonWrapper = styled.div`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${({theme}) => theme.radius};
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.cardBg};
`

const SkeletonImage = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${({theme}) => theme.colors.border};
  animation: ${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

const SkeletonContent = styled.div`
  padding: ${({theme}) => theme.spacing[4]};
`

const SkeletonLine = styled.div`
  height: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.border};
  animation: ${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  &.md { width: 75%; }
  &.sm { width: 50%; }
`

export const Skeleton = () => (
    <SkeletonWrapper>
        <SkeletonImage />
        <SkeletonContent>
            <SkeletonLine />
            <SkeletonLine className="md" />
            <SkeletonLine className="sm" />
        </SkeletonContent>
    </SkeletonWrapper>
)
