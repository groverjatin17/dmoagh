import React from 'react';

import RenderLottie from '../../components/Animations/RenderLottie';
import LOTTIE_MAPPING from '../../common/global-constants/LottieMapping';

export default function ContactUs() {
  return (
    <div>
      <RenderLottie animationData={LOTTIE_MAPPING.DOCTOR} />
      Contact Us page is here.
    </div>
  );
}
