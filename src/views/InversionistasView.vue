<script setup>
import InvestorsLayout from '@/layouts/InvestorsLayout.vue'
import HeroInvestors from '@/components/sections/investors/HeroInvestors.vue'
import MarketProblem from '@/components/sections/investors/Marketproblem.vue'
import InvestorGraph from '@/components/sections/investors/InvestorGraph.vue'
import TeamSection from '@/components/sections/investors/TeamSection.vue'
</script>

<template>
  <InvestorsLayout>
    <HeroInvestors />
    <MarketProblem />
    <InvestorGraph />
    <TeamSection />
  </InvestorsLayout>
</template>
