<script setup lang="ts">
import { useModuleStore } from '../stores/useModuleStore'

const moduleStore = useModuleStore()
const config = moduleStore.moduleConfig.EnhanceExperience

const qualityDescList = ['原画', '蓝光PRO', '蓝光', '超清PRO', '超清', '高清']
</script>

<template>
  <div>
    <el-row>
      <el-space wrap>
        <el-switch v-model="config.switchLiveStreamQuality.enabled" active-text="自动切换画质" />
        <el-select
          v-model="config.switchLiveStreamQuality.qualityDesc"
          placeholder="Select"
          style="width: 110px"
        >
          <el-option v-for="i in qualityDescList" :key="i" :label="i" :value="i" />
        </el-select>
        <Info id="EnhanceExperience.switchLiveStreamQuality" />
      </el-space>
    </el-row>
    <el-row>
      <el-space wrap>
        <el-switch v-model="config.banp2p.enabled" active-text="禁用P2P" />
        <Info id="EnhanceExperience.banp2p" />
      </el-space>
    </el-row>
    <el-row>
      <el-space wrap>
        <el-switch v-model="config.noReport.enabled" active-text="拦截日志数据上报" />
        <Info id="EnhanceExperience.noReport" />
      </el-space>
    </el-row>
    <el-row>
      <el-space wrap>
        <el-switch v-model="config.removePKBox.enabled" active-text="移除大乱斗元素" />
        <Info id="EnhanceExperience.removePKBox" />
      </el-space>
    </el-row>
    <el-row>
      <el-space wrap>
        <el-switch v-model="config.removeLiveWaterMark.enabled" active-text="移除直播间水印" />
        <Info id="EnhanceExperience.removeLiveWaterMark" />
      </el-space>
    </el-row>
    <el-divider />
  </div>
</template>
