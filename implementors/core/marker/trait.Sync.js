(function() {var implementors = {};
implementors["hermit"] = [{"text":"impl&lt;'a&gt; Sync for SpinlockContainer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for SpinlockIrqSaveContainer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for itimerval","synthetic":true,"types":[]},{"text":"impl Sync for timespec","synthetic":true,"types":[]},{"text":"impl Sync for timeval","synthetic":true,"types":[]},{"text":"impl Sync for BootInfo","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for AcpiTable&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Fuse","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Cmd&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Rsp&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for fuse_in_header","synthetic":true,"types":[]},{"text":"impl Sync for fuse_out_header","synthetic":true,"types":[]},{"text":"impl Sync for fuse_init_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_init_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_read_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_read_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_write_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_write_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_open_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_open_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_release_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_release_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_lookup_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_entry_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_attr","synthetic":true,"types":[]},{"text":"impl Sync for fuse_unlink_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_unlink_out","synthetic":true,"types":[]},{"text":"impl Sync for fuse_create_in","synthetic":true,"types":[]},{"text":"impl Sync for fuse_create_out","synthetic":true,"types":[]},{"text":"impl Sync for Opcode","synthetic":true,"types":[]},{"text":"impl Sync for ExceptionStackFrame","synthetic":true,"types":[]},{"text":"impl Sync for IrqStatistics","synthetic":true,"types":[]},{"text":"impl Sync for PciAdapter","synthetic":true,"types":[]},{"text":"impl Sync for IOBar","synthetic":true,"types":[]},{"text":"impl Sync for MemoryBar","synthetic":true,"types":[]},{"text":"impl Sync for PciClassCode","synthetic":true,"types":[]},{"text":"impl Sync for PciNetworkControllerSubclass","synthetic":true,"types":[]},{"text":"impl Sync for PciBar","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for PciDriver&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for PerCoreInnerVariables","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for PerCoreVariable&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for XSaveLegacyRegion","synthetic":true,"types":[]},{"text":"impl Sync for XSaveHeader","synthetic":true,"types":[]},{"text":"impl Sync for XSaveAVXState","synthetic":true,"types":[]},{"text":"impl Sync for XSaveLWPState","synthetic":true,"types":[]},{"text":"impl Sync for XSaveBndregs","synthetic":true,"types":[]},{"text":"impl Sync for XSaveBndcsr","synthetic":true,"types":[]},{"text":"impl Sync for FPUState","synthetic":true,"types":[]},{"text":"impl Sync for BootStack","synthetic":true,"types":[]},{"text":"impl Sync for CommonStack","synthetic":true,"types":[]},{"text":"impl Sync for TaskTLS","synthetic":true,"types":[]},{"text":"impl Sync for TaskStacks","synthetic":true,"types":[]},{"text":"impl Sync for SerialPort","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Virtq&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for virtq_desc_raw","synthetic":true,"types":[]},{"text":"impl Sync for virtio_pci_notify_cap","synthetic":true,"types":[]},{"text":"impl Sync for virtio_pci_common_cfg","synthetic":true,"types":[]},{"text":"impl !Sync for VirtioNotification","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for VirtioFsDriver&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for VirtioNetDriver&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for PageTableEntryFlags","synthetic":true,"types":[]},{"text":"impl Sync for PageTableEntry","synthetic":true,"types":[]},{"text":"impl Sync for BasePageSize","synthetic":true,"types":[]},{"text":"impl Sync for LargePageSize","synthetic":true,"types":[]},{"text":"impl Sync for HugePageSize","synthetic":true,"types":[]},{"text":"impl !Sync for Filesystem","synthetic":true,"types":[]},{"text":"impl Sync for FilePerms","synthetic":true,"types":[]},{"text":"impl Sync for FileError","synthetic":true,"types":[]},{"text":"impl Sync for SeekWhence","synthetic":true,"types":[]}];
implementors["log"] = [{"text":"impl&lt;'a&gt; !Sync for Record&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for RecordBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Metadata&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for MetadataBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SetLoggerError","synthetic":true,"types":[]},{"text":"impl Sync for ParseLevelError","synthetic":true,"types":[]},{"text":"impl Sync for Level","synthetic":true,"types":[]},{"text":"impl Sync for LevelFilter","synthetic":true,"types":[]}];
implementors["multiboot"] = [{"text":"impl&lt;'a, F&gt; Sync for Multiboot&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BootDevice","synthetic":true,"types":[]},{"text":"impl Sync for MemoryEntry","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; Sync for MemoryMapIter&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Module&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; Sync for ModuleIter&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MemoryType","synthetic":true,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T&gt; Sync for Complex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for ParseComplexError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_integer"] = [{"text":"impl&lt;A&gt; Sync for ExtendedGcd&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for IterBinomial&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_iter"] = [{"text":"impl&lt;A&gt; Sync for Range&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for RangeInclusive&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for RangeStep&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for RangeStepInclusive&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for RangeFrom&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for RangeStepFrom&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; Sync for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ParseRatioError","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl Sync for ParseFloatError","synthetic":true,"types":[]},{"text":"impl Sync for FloatErrorKind","synthetic":true,"types":[]}];
implementors["raw_cpuid"] = [{"text":"impl Sync for CpuId","synthetic":true,"types":[]},{"text":"impl Sync for CpuIdResult","synthetic":true,"types":[]},{"text":"impl Sync for VendorInfo","synthetic":true,"types":[]},{"text":"impl Sync for CacheInfoIter","synthetic":true,"types":[]},{"text":"impl Sync for CacheInfo","synthetic":true,"types":[]},{"text":"impl Sync for ProcessorSerial","synthetic":true,"types":[]},{"text":"impl Sync for FeatureInfo","synthetic":true,"types":[]},{"text":"impl Sync for CacheParametersIter","synthetic":true,"types":[]},{"text":"impl Sync for CacheParameter","synthetic":true,"types":[]},{"text":"impl Sync for MonitorMwaitInfo","synthetic":true,"types":[]},{"text":"impl Sync for ThermalPowerInfo","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedFeatures","synthetic":true,"types":[]},{"text":"impl Sync for DirectCacheAccessInfo","synthetic":true,"types":[]},{"text":"impl Sync for PerformanceMonitoringInfo","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedTopologyIter","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedTopologyLevel","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedStateInfo","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedStateIter","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedState","synthetic":true,"types":[]},{"text":"impl Sync for RdtMonitoringInfo","synthetic":true,"types":[]},{"text":"impl Sync for L3MonitoringInfo","synthetic":true,"types":[]},{"text":"impl Sync for RdtAllocationInfo","synthetic":true,"types":[]},{"text":"impl Sync for L3CatInfo","synthetic":true,"types":[]},{"text":"impl Sync for L2CatInfo","synthetic":true,"types":[]},{"text":"impl Sync for MemBwAllocationInfo","synthetic":true,"types":[]},{"text":"impl Sync for SgxInfo","synthetic":true,"types":[]},{"text":"impl Sync for SgxSectionIter","synthetic":true,"types":[]},{"text":"impl Sync for EpcSection","synthetic":true,"types":[]},{"text":"impl Sync for ProcessorTraceInfo","synthetic":true,"types":[]},{"text":"impl Sync for TscInfo","synthetic":true,"types":[]},{"text":"impl Sync for ProcessorFrequencyInfo","synthetic":true,"types":[]},{"text":"impl Sync for DatIter","synthetic":true,"types":[]},{"text":"impl Sync for DatInfo","synthetic":true,"types":[]},{"text":"impl Sync for SoCVendorInfo","synthetic":true,"types":[]},{"text":"impl Sync for SoCVendorAttributesIter","synthetic":true,"types":[]},{"text":"impl Sync for SoCVendorBrand","synthetic":true,"types":[]},{"text":"impl Sync for HypervisorInfo","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedFunctionInfo","synthetic":true,"types":[]},{"text":"impl Sync for MemoryEncryptionInfo","synthetic":true,"types":[]},{"text":"impl Sync for CacheInfoType","synthetic":true,"types":[]},{"text":"impl Sync for CacheType","synthetic":true,"types":[]},{"text":"impl Sync for TopologyType","synthetic":true,"types":[]},{"text":"impl Sync for SgxSectionInfo","synthetic":true,"types":[]},{"text":"impl Sync for DatType","synthetic":true,"types":[]},{"text":"impl Sync for Hypervisor","synthetic":true,"types":[]},{"text":"impl Sync for L2Associativity","synthetic":true,"types":[]}];
implementors["scopeguard"] = [{"text":"impl Sync for Always","synthetic":true,"types":[]},{"text":"impl&lt;T, F, S&gt; Sync for ScopeGuard&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Strategy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["x86"] = [{"text":"impl Sync for Ring","synthetic":true,"types":[]},{"text":"impl Sync for EFlags","synthetic":true,"types":[]},{"text":"impl Sync for TaskStateSegment","synthetic":true,"types":[]},{"text":"impl Sync for PAddr","synthetic":true,"types":[]},{"text":"impl Sync for VAddr","synthetic":true,"types":[]},{"text":"impl Sync for Page","synthetic":true,"types":[]},{"text":"impl Sync for LargePage","synthetic":true,"types":[]},{"text":"impl Sync for HugePage","synthetic":true,"types":[]},{"text":"impl Sync for PML4Flags","synthetic":true,"types":[]},{"text":"impl Sync for PML4Entry","synthetic":true,"types":[]},{"text":"impl Sync for PDPTFlags","synthetic":true,"types":[]},{"text":"impl Sync for PDPTEntry","synthetic":true,"types":[]},{"text":"impl Sync for PDFlags","synthetic":true,"types":[]},{"text":"impl Sync for PDEntry","synthetic":true,"types":[]},{"text":"impl Sync for PTFlags","synthetic":true,"types":[]},{"text":"impl Sync for PTEntry","synthetic":true,"types":[]},{"text":"impl Sync for RFlags","synthetic":true,"types":[]},{"text":"impl Sync for Descriptor64","synthetic":true,"types":[]},{"text":"impl Sync for TaskStateSegment","synthetic":true,"types":[]},{"text":"impl Sync for Icr","synthetic":true,"types":[]},{"text":"impl Sync for DeliveryMode","synthetic":true,"types":[]},{"text":"impl Sync for DestinationMode","synthetic":true,"types":[]},{"text":"impl Sync for DeliveryStatus","synthetic":true,"types":[]},{"text":"impl Sync for Level","synthetic":true,"types":[]},{"text":"impl Sync for TriggerMode","synthetic":true,"types":[]},{"text":"impl Sync for DestinationShorthand","synthetic":true,"types":[]},{"text":"impl Sync for ApicId","synthetic":true,"types":[]},{"text":"impl !Sync for IoApic","synthetic":true,"types":[]},{"text":"impl Sync for X2APIC","synthetic":true,"types":[]},{"text":"impl Sync for XAPIC","synthetic":true,"types":[]},{"text":"impl Sync for Cr0","synthetic":true,"types":[]},{"text":"impl Sync for Cr4","synthetic":true,"types":[]},{"text":"impl Sync for Xcr0","synthetic":true,"types":[]},{"text":"impl&lt;Entry&gt; !Sync for DescriptorTablePointer&lt;Entry&gt;","synthetic":true,"types":[]},{"text":"impl Sync for InterruptDescription","synthetic":true,"types":[]},{"text":"impl Sync for PageFaultError","synthetic":true,"types":[]},{"text":"impl Sync for SegmentSelector","synthetic":true,"types":[]},{"text":"impl Sync for DescriptorBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Descriptor","synthetic":true,"types":[]},{"text":"impl Sync for SystemDescriptorTypes64","synthetic":true,"types":[]},{"text":"impl Sync for SystemDescriptorTypes32","synthetic":true,"types":[]},{"text":"impl Sync for DataSegmentType","synthetic":true,"types":[]},{"text":"impl Sync for CodeSegmentType","synthetic":true,"types":[]},{"text":"impl Sync for VmFail","synthetic":true,"types":[]},{"text":"impl Sync for PinbasedControls","synthetic":true,"types":[]},{"text":"impl Sync for PrimaryControls","synthetic":true,"types":[]},{"text":"impl Sync for SecondaryControls","synthetic":true,"types":[]},{"text":"impl Sync for EntryControls","synthetic":true,"types":[]},{"text":"impl Sync for ExitControls","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()