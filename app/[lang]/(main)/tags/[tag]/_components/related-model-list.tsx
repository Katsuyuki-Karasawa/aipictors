"use client"

import { ModelButton } from "@/app/[lang]/(main)/tags/[tag]/_components/model-button"
import { Box, Stack } from "@chakra-ui/react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

export const RelatedModelList: React.FC = () => {
  return (
    <Stack>
      <Splide
        aria-label="関連タグ"
        options={{
          rewind: true,
          gap: "1rem",
          autoWidth: true,
          pagination: false,
          arrows: false,
        }}
      >
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
        <Box as={SplideSlide}>
          <ModelButton />
        </Box>
      </Splide>
    </Stack>
  )
}
